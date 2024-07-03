class Comment {
    constructor(username, content) {
        this.username = username
        this.content = content
        this.createAdt = new Date()
    }
}

module.exports = Comment