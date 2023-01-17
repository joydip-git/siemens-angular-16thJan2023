import { PostManager } from "./manager/postmanager"
import { Post } from "./models/post"

async function loadData() {
    try {
        const manager = new PostManager()
        const posts = await manager.fetchPosts()

        posts.forEach(
            (p: Post) => {
                const tdUserId = document.createElement('td')
                tdUserId.innerText = p.userId.toString()

                const tdTitle = document.createElement('td')
                tdTitle.innerText = p.title

                const tdBody = document.createElement('td')
                tdBody.innerText = p.body

                const row = document.createElement('tr')
                row.append(tdUserId, tdTitle, tdBody)

                document.getElementById('tbody')
                    ?.appendChild(row)
            }
        )
    } catch (error: any) {
        const errorSpan = <HTMLSpanElement>document.getElementById('errorSpan')
        if (errorSpan.hidden === true) {
            errorSpan.hidden = false
            errorSpan.innerHTML = `<b>${error.message}</b>`
        }
    }
}
loadData()