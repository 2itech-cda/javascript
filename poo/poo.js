/**
    modularité 
    maintenabilité
    réutiliser
    lisibilité
    conception
    encapsulation (public, private, protected)

    hierachie héritage 
    polymorphisme
    instance d'objets
**/

class User {
    static count = 0;

    constructor(name) {
        this.name = name;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }

    presentation() {
        User.count++;

        if (this.isAdmin()) {
            return `Je suis ${this.name}, admin.`
        }

        return `Je suis ${this.name}`; // Template String
    }
}

let u1 = new User('john'); // new constructor()
let u2 = new User('joe');

console.log(u1.presentation());
console.log(u2.presentation());

User.count++;
User.count++;
console.log(User.count);

/**
 * Mémoire
 * 
 * +----+----------+------+
 * | u1 | 0x000001 | User | 
 * | u2 | 0x000002 | User |
 * +----+----------+------+
 */