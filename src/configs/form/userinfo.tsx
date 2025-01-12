import { UserForm } from "../../types"

export const userFormInfo: UserForm = {
    "fields": [
      {
        "name": "username",
        "value": "test",
        "type": "textinput",
        "validators": (v) => typeof v === 'string' && v.trim().length > 0 ? null: 'Invalid username',
      },
      {
        "name": "bio",
        "type": "textarea",
        "validators": (v) => typeof v === 'string' && v.trim().length > 50 ? null: 'Bio must contain more than 50 letters'
      },
      {
        "name": "country",
        "type": "select",
        "data": ["USA", "Canada", "UK", "Australia"],
        "validators": (v) => ['USA', 'Canada', 'UK'].includes(v) ? null: 'Please select country'
      },
      {
        "name": "address",
        "type": "textinput",
        "validators": (v) => typeof v === 'string' && v.trim().length > 0 ? null: 'Please input your address'
      }
    ]
}