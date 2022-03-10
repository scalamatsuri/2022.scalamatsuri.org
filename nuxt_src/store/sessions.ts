
import * as mTypes from './mutation-types'
import {
  combineMutation,
  combineAction
} from 'vuex-typescript-fsa'
import { DateTime } from 'luxon'
import { sortBy, groupBy, Dictionary } from 'lodash'
import { defineModule, defineGetter } from '~/store/helpers'
import { RootState } from '~/store'
import { Session } from '~/models/session'

import sessionsData from '~/data/sessions/index.json'
import acceptedSessions from '~/data/top/acceptedSessions.json'
import sponsorSessionData from '~/data/sponsor-sessions/all.json'
import { Proposal } from '~/models/proposal'
import { Zone } from 'luxon'

export const namespace = 'sessions'

interface PartialSession {
  startAt: number | string,
  endAt: number | string,
  id?: string, // proposal id
  title?: string | {ja: string, en: string}, // alternative to proposal id.
  room?: string,
  youtubeUrl?: string,
  slideUrl?: string
}

export interface State {
  sessions: Array<Session>
}

const initialState = (): State => {
  const partialSessions: Array<PartialSession> = sessionsData
  const sessons: Array<Proposal> = acceptedSessions
  const sponsorSessions: Array<Proposal> = sponsorSessionData

  // All sessions, containing: acceptedSessions, sponsor sessions, and unconference sessions.
  const sessionsMap: Map<string, Proposal> = new Map(sessons.concat(sponsorSessions).map(p => [p.id, p]))
 
  const parseUnixTime = (unixTimeOrTimeStr: number | string): number => {
    return typeof unixTimeOrTimeStr === "number" ? 
      unixTimeOrTimeStr : 
      DateTime.fromFormat(unixTimeOrTimeStr, "yyyy-MM-dd HH:mm", {zone: "UTC+9"}).toSeconds()
  }
  return {
    sessions: partialSessions.map(s => ({
      ...s,
      startAt: parseUnixTime(s.startAt),
      endAt: parseUnixTime(s.endAt),
      proposal: s.id ? sessionsMap.get(s.id) : undefined
    }))
  }
}

const getters = defineGetter<State, RootState>()({
  /**
   * Get sessions that held on specific date and sorted by its start time.
   */
  filterByDateAndGroupByStartAt: state => (date: number): Dictionary<Session[]> => {
    const targets = state.sessions.filter(s => DateTime.fromSeconds(s.startAt).setZone(`UTC+9`).day === date)
    return groupBy(sortBy(targets, ['startAt']), 'startAt')
  }
})

export const sessionsModule = defineModule<State, RootState>()({
  namespaced: true,
  state: initialState,
  actions: combineAction(),
  mutations: combineMutation(),
  getters
})