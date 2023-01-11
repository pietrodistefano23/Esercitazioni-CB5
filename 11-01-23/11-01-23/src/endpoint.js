

export const ENDPOINT = {
    BASE : 'https://random-data-api.com/api/v2',
    get USERS (){
        return `${this.BASE}/users`
    },
    get ADDRESS (){
        return `${this.BASE}/addresses`
    },
    get APPLIANCES (){
        return `${this.BASE}/appliances`
    },
    get BEERS (){
        return `${this.BASE}/beers`
    }
}