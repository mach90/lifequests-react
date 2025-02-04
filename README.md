# LifeQuests React

## ⚙️ TECHNOLOGIES
React, Vite, Axios, Tanstack
TailwindCSS, Chartjs, React-three
Hook Form, Hot Toasts, React Icons, Game-icons.net
___

## 🔧 TO FIX

___

## 🔳 TO DO
| Type           | Section        | TODO                                                | Status |
| -------------- | -------------- | --------------------------------------------------- | ------ |
| Error Handling | ←              | ←                                                   | 🔴     |
| Testing        | Create tests   | ←                                                   | ⚫     |
| Refactoring    | UI             | ←                                                   | ⚫     |
|                | Logic          | ←                                                   | ⚫     |
| Backend/API    | User model     | Username should only contain az09                   | 🔴     |
|                | Indexes        | Create indexes that will improve performances       | 🔴     |
|                | Emailing       | Production Emailing service                         | 🟠     |
|                |                | Welcome message (activate account)                  | 🟠     |
|                |                | Reset password mail (reset link)                    | 🟠     |
| Frontend       | UI             | Modal for all                                       | 🔴     |
|                |                | Confirmation in modal for all                       | 🔴     |
|                | Auth           | Forgot password form                                | 🔴     |
|                |                | Reset password page+form                            | 🔴     |
|                | Settings       | Basic settings                                      | 🟠     |
|                | Navigation     | Main nav routes should remember and use last params | 🔴     |
|                | Contracts      | Get my contracts/contract (x2)                      | 🟢     |
|                |                | Post contracts                                      | 🟢     |
|                |                | Patch contracts                                     | 🟢     |
|                | Guild progress | Get my guilds/guild progress (x2)                   | 🔴     |
|                |                | Post guild progress                                 | 🔴     |
|                |                | Patch guild progress                                | 🔴     |
|                | Inventory      | .glb 3D viewer                                      | 🟠     |
|                |                | Character equipement/perks                          | 🔴     |
|                |                | Marketplace                                         | ⚫     |
|                |                | Books reader                                        | ⚫     |
|                |                | App viewer                                          | ⚫     |
|                |                | Doc reader                                          | ⚫     |
|                |                | Picture viewer                                      | ⚫     |
|                | Quests         | Community pictures                                  | ⚫     |

___

## COMPLETED TASKS
- [x] Keep session alive
- [x] user data flow issue
- [x] Update user data form
- [x] Update password form
- [x] Delete account form
- [x] Change photo form
- [x] Signup form

___

## LEGEND
🟢 100% done
🟡 75% done
🟠 50% done
🟤 25% done
🔴 0% done
⚫ Ideas/Later

L-Filter/Sort/Paginate
M-Implementing Filter/Sort/Paginate
M-Quest -> Contract -> XP update flow
JV-Guild quest -> Contract & Quest -> Contract relation per user (UI display and condition)
- If contract quest is finished it must be shown on the quest list and guild quests list, and a contract can't be signed for that quest anymore, the quest must also be hidden in the guild quest list
- If contract is active or finished, the quest list and guilds quest list must show that and disable the sign contract button
- Basically you can only sign a contract for a quest once, otherwise the button is hidden
SD-Stats (aggregate)