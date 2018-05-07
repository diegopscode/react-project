const initialState = ""

export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch(type) {

        case "ABOUT_UPDATE": {
            return payload
        }
        break

        default: {
            return state
        }
    }
  
    return state
}