export interface FlightSearch{
  searchType: string,
  daysToDeparture?: number,
  departureDateFrom?: string,
  departureDateTo?: string,
  origin?:string,
  destination?:string
}
