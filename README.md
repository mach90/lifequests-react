# LifeQuests React

## ⚙️ TECHNOLOGIES
React, Vite, Axios, Tanstack
TailwindCSS, Chartjs, React-three
Hook Form, Hot Toasts, React Icons, Game-icons.net
___

## 🔧 TO FIX

___

## 🔳 TO DO
| Type           | Section              | St  | TODO                                                |
| -------------- | -------------------- | --- | --------------------------------------------------- |
| Error Handling | ←                    | 🔴  | ←                                                   |
| Testing        | Create tests         | ⚫   | ←                                                   |
| Refactoring    | UI                   | ⚫   | ←                                                   |
|                | Logic                | 🔴  | ←                                                   |
| Backend/API    | User model           |     |                                                     |
|                | Indexes              | 🔴  | *Create indexes that will improve performances*     |
|                | Emailing             | 🟠  | *Production Emailing service*                       |
|                |                      | 🟠  | *Welcome message (activate account)*                |
|                |                      | 🟠  | *Reset password mail (reset link)*                  |
| Frontend       | UI                   | 🔴  | *Modals*                                            |
|                |                      | 🔴  | *Confirmation in modal*                             |
|                | Auth                 | 🔴  | *Forgot password form*                              |
|                |                      | 🔴  | *Reset password page+form*                          |
|                | Settings             | 🟠  | *Basic settings*                                    |
|                | Navigation           | 🔴  | Main nav routes should remember and use last params |
|                | Filter/Sort/Paginate | 🟢  | **Filtering/Sorting/Paginating**                    |
|                |                      | 🟠  | *Nested params*                                     |
|                | Character            | 🟢  | **Patch contract → Patch character**                |
|                |                      | 🟢  | **Min/Max values after patch validator**            |
|                | Contracts            | 🟢  | **Get my contracts/contract (x2)**                  |
|                |                      | 🟢  | **Post contracts**                                  |
|                |                      | 🟢  | **Patch contracts**                                 |
|                | Guild progress       | 🔴  | *Get my guilds/guild progress (x2)*                 |
|                |                      | 🔴  | *Post guild progress*                               |
|                |                      | 🔴  | *Patch guild progress*                              |
|                | Guilds               | ⚫   | Chatbots                                            |
|                | Inventory            | 🟠  | .glb 3D viewer                                      |
|                |                      | ⚫   | Character equipement/perks                          |
|                |                      | ⚫   | Marketplace                                         |
|                |                      | ⚫   | Books reader                                        |
|                |                      | ⚫   | App viewer                                          |
|                |                      | ⚫   | Doc reader                                          |
|                |                      | ⚫   | Picture viewer                                      |
|                | Quests               | ⚫   | Community pictures                                  |

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

SD-Guild progress (API: routes, Frontend: post patch apiProgress, useProgress, useUpdateProgress) Creating a contract creates an empty progress for all the guilds associated to the quest. Completing a contract patch all the progress (all associated guilds) adding the XP to them.