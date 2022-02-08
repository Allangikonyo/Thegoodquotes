export class  Quote{
    username: string
    quote: string 
    votes: number


    constructor(username: string, quote: string, votes?: number){
        this.username = username
        this.quote = quote 
        this.votes = votes || 0 

    }

    voteUp(){
        this.votes += 1 
    }

    voteDown(){
        this.votes -= 1 
    }

}
