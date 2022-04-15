export interface Moodlog {
    createdAt: string
    description?: string
    id: string
    moodvalue: number
    title?: string
    updatedAt: string
    userid: string
  }

export interface session{
    user?:{
      name?:string
      email?:string
      image?:string
      isVerified?:boolean
      emailVerified?: Date | null
    }
  }
export interface Survey {
    id: number
    type:string
    estimatedTime:string
    title: string,
    subtitle: string,
    questions: []
  }
  export interface SurveyResponse {
    id: string
    surveyid: Number 
    respondentid: string
    questions: JSON
    isComplete: Boolean
    results: {
      totalValue:number
      message:string
      suggestion?:string
      dateComplete: Date
    }
  }

export interface message{
  text:string
  speaker:string
  timestamp:string
}

export interface chat_session {
  id:string
  created_at:string
  updated_at: string
  messages: message[]
  userid: string
}