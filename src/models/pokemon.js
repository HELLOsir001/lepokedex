export default class Pokemon {
    constructor(id, hp = 100, cp = 10, name = 'name', picture = 'http://...', types = ['Normal'], created = new Date()) {
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}
