const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 21,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Павел",
            "id_12": "Алексей",
            "id_13": "Антон",
            "id_14": "Герман",
            "id_15": "Олег",
            "id_16": "Владимир",
            "id_17": "Валентин",
            "id_18": "Аркадий",
            "id_19": "Юрий",
            "id_20": "Николай",
            "id_21": "Денис"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 21,
        "list": {
            "id_1": "Ксения",
            "id_2": "Мария",
            "id_3": "Валентина",
            "id_4": "Людмила",
            "id_5": "Кристина",
            "id_6": "Виктория",
            "id_7": "Ольга",
            "id_8": "Татьяна",
            "id_9": "Виолетта",
            "id_10": "Самер",
            "id_11": "Александра",
            "id_12": "Юлия",
            "id_13": "Зинаида",
            "id_14": "Милана",
            "id_15": "Екатерина",
            "id_16": "Анастасия",
            "id_17": "Хина",
            "id_18": "Вера",
            "id_19": "Надежда",
            "id_20": "Любовь",
            "id_21": "Оксана"
        }
    }`,

    occupations: `{
        "count": 20,
        "limit": 8,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Солдат",
            "id_3": "Моряк",
            "id_4": "Коксоочиститель",
            "id_5": "Стеклодув",
            "id_6": "Кузнец",
            "id_7": "Дробильщик",
            "id_8": "Ароматизаторщик",
            "id_9": "Инженер",
            "id_10": "Оператор техподдержки",
            "id_11": "Кондитер",
            "id_12": "Повар",
            "id_13": "Журналист",
            "id_14": "Художник",
            "id_15": "Спортсмен",
            "id_16": "Водитель",
            "id_17": "Учитель",
            "id_18": "Менеджер",
            "id_19": "Техник",
            "id_20": "Продавец",
            "id_21": "Предприниматель"
        }
    }`,

    months: `{
        "count": 12,
        "list": {
            "id_1": "Январь",
            "id_2": "Февраль",
            "id_3": "Март",
            "id_4": "Апрель",
            "id_5": "Май",
            "id_6": "Июнь",
            "id_7": "Июль",
            "id_8": "Август",
            "id_9": "Сентябрь",
            "id_10": "Октябрь",
            "id_11": "Ноябрь",
            "id_12": "Декабрь"
        },
        "days": {
            "id_1": 31,
            "id_2": 28,
            "id_3": 31,
            "id_4": 30,
            "id_5": 31,
            "id_6": 30,
            "id_7": 31,
            "id_8": 31,
            "id_9": 30,
            "id_10": 31,
            "id_11": 30,
            "id_12": 31
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
        return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE; 
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomOccupation: function (gender = 'Мужчина', birthYear = 1994) {
        const obj = JSON.parse(this.occupations);
        let curYear = 2021;
        if (curYear - birthYear < 18) return 'Несовершеннолетний';
        if (gender === 'Женщина') {
            const prop = `id_${this.randomIntNumber(obj.count, obj.limit)}`;
            return obj.list[prop];
        } else {
            const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
            return obj.list[prop];
        }
    },

    randomFirstName: function(gender) {
        if (gender === 'Женщина') return this.randomValue(this.firstNameFemaleJson);

        else if (gender === 'Мужчина') return this.randomValue(this.firstNameMaleJson);

    },

    randomBirthDate: function () {
        let birthDate = {};
        let obj = JSON.parse(this.months);
        birthDate.year = this.randomIntNumber(2021, 1903);
        birthDate.month = this.randomValue(this.months);

        //Генерирует дату исходя из месяца рождения. Ограничения макс. дня берется из JSON      
        for (let key in obj.list) {
            if (obj.list[key] === birthDate.month) {
               birthDate.day = this.randomIntNumber(obj.days[key], 1);
            }   
        }

        //Выводит месяц в правильном падеже
        birthDate.rusMonth = function() {
            let month = this.month;
            if (month.endsWith('ь') || month.endsWith('й')) return `${month.slice(0, month.length - 1)}я`;
            else return `${month}а`
        };
        return birthDate;
    },

        randomSurname: function(gender) {
        if (gender === 'Женщина') return this.randomValue(this.surnameJson) + 'а';
        else return this.randomValue(this.surnameJson);
    },
    
    randomFathername: function(gender) {
        //Генерирует отчество из рандомного мужского имени взятого из JSON и подставляет нужные суфиксы в зависимости от пола и имени для отчества
        let fatherName = '';
        if (gender === 'Женщина') {
            fatherName = this.randomValue(this.firstNameMaleJson);
            if (fatherName.endsWith('ай') || fatherName.endsWith('ей')) {
                fatherName = fatherName.slice(0, fatherName.length - 1)+'евна'
            } else if ( fatherName.includes('Юрий') || fatherName.includes('Аркадий') ) {
                fatherName = fatherName.slice(0, fatherName.length - 2)+'ьевна';
            } else if ( fatherName.includes('Дмитрий') ) {
                fatherName = 'Дмитриевна';
            } else if ( fatherName.includes('Павел') ) {
                fatherName = 'Павловна';
            } else if ( fatherName.includes('Михаил') ) {
                fatherName = 'Михайловна';
            } else if ( fatherName.includes('Никита') ) {
                fatherName = 'Никитовна';
            } else {
                fatherName = fatherName + 'овна'
            }    
            return fatherName;
        }
        if (gender === 'Мужчина') {
            fatherName = this.randomValue(this.firstNameMaleJson);
            if (fatherName.endsWith('ай') || fatherName.endsWith('ей')) {
                fatherName = fatherName.slice(0, fatherName.length - 1)+'евич'
            } else if ( fatherName.includes('Юрий') || fatherName.includes('Аркадий') ) {
                fatherName = fatherName.slice(0, fatherName.length - 2)+'ьевич';
            } else if ( fatherName.includes('Дмитрий') ) {
                fatherName = 'Дмитриевич';
            } else if ( fatherName.includes('Павел') ) {
                fatherName = 'Павлович';
            } else if ( fatherName.includes('Михаил') ) {
                fatherName = 'Михайлович';
            } else if ( fatherName.includes('Никита') ) {
                fatherName = 'Никитович';
            } else {
                fatherName = fatherName + 'ович'
            }    
            return fatherName;
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.fatherName = this.randomFathername(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.birthDate = this.randomBirthDate();
        this.person.occupation = this.randomOccupation(this.person.gender, this.person.birthYear);
        return this.person;
    }
};
