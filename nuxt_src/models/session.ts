
import { Proposal } from './proposal'

export interface Session {
    startAt: number, // unixtime
    endAt: number, // unixtime
    proposal?: Proposal | null,
    title?: string | {ja: string, en: string},
    room?: string,
    youtubeUrl?: string,
    slideUrl?: string
}
