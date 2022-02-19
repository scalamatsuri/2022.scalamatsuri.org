import * as mTypes from './mutation-types'
import { combineMutation, combineAction } from 'vuex-typescript-fsa'
import { DateTime } from 'luxon'
import { sortBy, groupBy, Dictionary } from 'lodash'
import { defineModule, defineGetter } from '~/store/helpers'
import { RootState } from '~/store'
import { Session } from '~/models/session'

import sessionsData from '~/data/sessions/index.json'
import proposals from '~/data/proposals/all.json'
import openMicSessionData from '~/data/open-mic-conference/all.json'
import sponsorSessionData from '~/data/sponsor-sessions/all.json'
import { Proposal } from '~/models/proposal'

export const namespace = 'sessions'

interface PartialSession {
  startAt: number
  endAt: number
  id?: string // proposal id
  title?: string // alternative to proposal id.
  room?: string
  youtubeUrl?: string
  slideUrl?: string
}

export interface State {
  sessions: Array<Session>
}

const initialState = (): State => {
  const partialSessions: Array<PartialSession> = sessionsData
  const sessons: Array<Proposal> = proposals
  const openMicSessions: Array<Proposal> = openMicSessionData
  const sponsorSessions: Array<Proposal> = sponsorSessionData

  // All sessions, containing: proposals, sponsor sessions, and Open mic conference sessions.
  const sessionsMap: Map<string, Proposal> = new Map(
    sessons
      .concat(sponsorSessions)
      .concat(openMicSessions)
      .map(p => [p.id, p])
  )

  return {
    sessions: partialSessions.map(s => ({
      ...s,
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
