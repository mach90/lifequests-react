# LifeQuests React

## ⚙️ TECHNOLOGIES
React, Vite, Axios, Tanstack
TailwindCSS, Chartjs, React-three
Hook Form, Hot Toasts, React Icons, Game-icons.net
___

## 🔧 TO FIX
- [ ] Login/Register etc. should redirect to Character page if user is logged in...
- [ ] Pagination /0 when switching pages
- [ ] Flashing UI
- [ ] Signup header UI not displaying infos until refresh

___

## 🔳 TO DO
| Type        | Section              | St  | TODO                                                                              |
| ----------- | -------------------- | --- | --------------------------------------------------------------------------------- |
| Testing     | Create tests         | ⚫   | Implement test & debut                                                            |
| Refactoring | UI                   | 🟠  | *Refactor UI*                                                                     |
|             | HTML                 | 🟠  | [*Use Semantic HTML*](https://www.w3schools.com/html/html5_semantic_elements.asp) |
|             | Logic                | 🟠  | *Refactor logic*                                                                  |
| Backend/API | Indexes              | 🔴  | *Create more appropriate indexes*                                                 |
|             | Error Handling       | 🟤  | *Error handling*                                                                  |
|             | Emailing             | 🟢  | **Production Emailing service**                                                   |
|             |                      | 🟢  | **Welcome message**                                                               |
|             |                      | 🟢  | **Reset password mail (reset link)**                                              |
|             | Aggregation/Stats    | 🟢  | **Statistics 7/30/90**                                                            |
|             | Quest                | 🟢  | **Quest model: skills array in quest reward**                                     |
|             | Skills               | 🟢  | **Skill model**                                                                   |
|             |                      | 🟢  | **Skill controller**                                                              |
|             |                      | 🟢  | **Skill routes**                                                                  |
|             | Skillsets            | 🟢  | **Skillset model**                                                                |
|             |                      | 🟢  | **Skillset controller**                                                           |
|             |                      | 🟢  | **Skillset routes**                                                               |
| Frontend    | UI                   | 🟢  | **Modals**                                                                        |
|             |                      | 🟢  | **Confirmation in modal**                                                         |
|             |                      | 🟢  | **Darkmode/lightmode**                                                            |
|             | Responsiveness       | 🔴  | *UI Responsiveness*                                                               |
|             | Auth                 | 🟢  | **Forgot password form**                                                          |
|             |                      | 🟢  | **Reset password page+form**                                                      |
|             | Settings             | 🟢  | **Basic settings (API/User model)**                                               |
|             | Reset                | 🔴  | *Reset character (xp0, money0, attributes0, contracts0, skillset0, progress0)*    |
|             | Navigation           | ⚫   | Main nav routes should remember and use last params                               |
|             | Filter/Sort/Paginate | 🟢  | **Filtering/Sorting/Paginating**                                                  |
|             |                      | 🟢  | **Override params**                                                               |
|             |                      | ⚫   | *Nested params*                                                                   |
|             | Character            | 🟢  | **Patch contract → Patch character**                                              |
|             |                      | 🟢  | **Min/Max values after patch validator**                                          |
|             | Contracts            | 🟢  | **Get my contracts/contract (x2)**                                                |
|             |                      | 🟢  | **Post contracts**                                                                |
|             |                      | 🟢  | **Patch contracts**                                                               |
|             |                      | 🟢  | **Rewards skill(s) on completion**                                                |
|             | Guild progress       | 🟢  | **Get my guilds/guild progress (x2)**                                             |
|             |                      | 🟢  | **Post guild progress**                                                           |
|             |                      | 🟢  | **Patch guild progress**                                                          |
|             |                      | 🟢  | **Patch contract related guilds progress**                                        |
|             | Skills/skillsets     | 🟢  | **Getallskills: Display all skills, sort, paginate**                              |
|             |                      | 🟢  | **Getmyskillset: Compare and display my skills**                                  |
|             |                      | 🟢  | **Getskillbyid: Display infos on skill**                                          |
|             |                      | 🟢  | **Create skillset**                                                               |
|             |                      | 🟢  | **Patch skillset**                                                                |
|             | Guilds               | ⚫   | Chatbots                                                                          |
|             | Inventory            | ⚫   | .glb 3D viewer                                                                    |
|             |                      | ⚫   | Character equipement/perks                                                        |
|             |                      | ⚫   | Marketplace                                                                       |
|             |                      | ⚫   | Books reader                                                                      |
|             |                      | ⚫   | App viewer                                                                        |
|             |                      | ⚫   | Doc reader                                                                        |
|             |                      | ⚫   | Picture viewer                                                                    |
|             | Quests               | ⚫   | Community pictures                                                                |

___

## LEGEND
🟢 100% done
🟡 75% done
🟠 50% done
🟤 25% done
🔴 0% done
⚫ Ideas/Later

SD-Guild progress (API: routes, Frontend: post patch apiProgress, useProgress, useUpdateProgress) Creating a contract creates an empty progress for all the guilds associated to the quest. Completing a contract patch all the progress (all associated guilds) adding the XP to them.