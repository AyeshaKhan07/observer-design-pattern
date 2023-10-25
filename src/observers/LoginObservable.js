class LoginObservable {
    constructor() {
        this.observersList = [];
    }

    subscribe(func) {
        this.observersList.push(func)
    }

    unSubscribe(func) {
        this.observersList = this.observersList.filter(observer => observer !== func)
    }

    notify(updatedValue) {
        this.observersList.forEach(observer => {
            observer(updatedValue)
        })
    }
}

export default new LoginObservable();