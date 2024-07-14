
export type panelInputLabel = 'from' | 'to' | 'depart' | 'return' | 'seatNumber' | 'seatClass'

export interface Info{
  from:string,
  to:string,
  seatNumber:number,
  seatClass:string,
  sort:Sort

}

export type Sort =  'optimal' | 'cheapest' | 'fastest'

