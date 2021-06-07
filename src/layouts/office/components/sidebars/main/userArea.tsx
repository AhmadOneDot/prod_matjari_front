import { ChevronUp16 } from '@carbon/icons-react'

export const UserArea = (): JSX.Element => (
  <div className="mto-main-sidebar__user-area flex flex-col space-y-12">
    <div>
      <input type="checkbox" className="toggle border-base-100" />
      <span className="toggle-mark" />
    </div>
    <button type="button" className="w-full h-24 flex flex-col items-center justify-center space-y-2">
      <ChevronUp16 />
      <img src="/imageedit_2_6805704837.jpg" alt="user name" className="w-8 h-8 rounded-full object-cover" />
    </button>
  </div>
)

export default UserArea
