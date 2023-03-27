import type { Dayjs } from 'dayjs'
import type { RangeValue } from 'rc-picker/lib/interface'

export interface ValueLabel {
	label: string | undefined
	value: string | undefined
}

export interface FilterOption {
	label: string
	value: string
	catalogueIds: string[]
}

export interface FiltersType {
	countryFilter: string[]
	organizationFilter: string[]
	tagsFilter: string[]
	dateCreatedFilter: DateFilterType
	dateUpdatedFilter: DateFilterType
}

export type DateFilterType = RangeValue<Dayjs>
