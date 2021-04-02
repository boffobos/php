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

    randomFirstName: function(gender) {
        if (gender === 'Женщина') return this.randomValue(this.firstNameFemaleJson);

        else if (gender === 'Мужчина') return this.randomValue(this.firstNameMaleJson);

    },


    randomSurname: function(gender) {
        if (gender === 'Женщина') return this.randomValue(this.surnameJson) + 'а';
        else return this.randomValue(this.surnameJson);

    },

    randomFathername: function(gender) {
        let fatherName = '';
        if (gender === 'Женщина') {
            fatherName = this.randomValue(this.firstNameMaleJson);
            if (fatherName.endsWith('ай') || fatherName.endsWith('ей')) {
                fatherName = fatherName.slice(0, fatherName.length - 1)+'евна'
            } else if ( fatherName.includes('Юрий') || fatherName.includes('Аркадий') ) {
                fatherName = fatherName.slice(0, fatherName.length - 2)+'ьевна';
            } else if ( fatherName.includes('Дмитрий') ) { // для Павла проработать, для Михаила
                fatherName = 'Дмитриевна';
            } else fatherName = fatherName + 'овна'
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
            } else fatherName = fatherName + 'ович'
            return fatherName;
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.fatherName = this.randomFathername(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        return this.person;
    }
};
