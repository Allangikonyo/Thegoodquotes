export class Article{
    title: string
    link: string 
    votes: number 

//default function that gets executed
// added question mark to votes for non-mandatory element
    constructor (title: string, link: string, votes?: number){
        this.title = title
        this.link = link 
        this.votes = votes || 0

    }

    // function to increase votes
    voteUp(){
        this.votes += 1 
    }

    // funtion to decrease votes 
    voteDown(){
        this.votes -= 1 
    }  
}