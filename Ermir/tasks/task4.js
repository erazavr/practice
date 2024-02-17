let Host = {
    guestList: [],

    setGuestList: function(names) {
        let rejectedNames = [];

        console.log("Список гостей: " + names.length + " имен.");

        for (let i = 0; i < names.length; i++) {
            if (Math.random() > 0.2) {
                Host.guestList.push(names[i]);
            } else {
                rejectedNames.push(names[i]);
            }
        }

        console.log("После принятия решения хозяином  приглашено  " + Host.guestList.length + " человек.");

        if (rejectedNames.length > 0) {
            console.log("Хозяин не пригласил : " + rejectedNames.join(', ') + ".");
        }

        console.log("Хозяин пригласил: " + Host.guestList.join(', ') + ".");
    }
};

let initialList = ['Ивон', 'Петр', 'Алексей', 'Мария', 'Селена', 'Наташа', 'Ольга', 'Маша'];
Host.setGuestList(initialList);
console.log(Host.guestList)