class Common {
    convertUserJSonFormatForXls(users) {
        const objArr = [];
        users.forEach((user) => {
            const u = JSON.parse(JSON.stringify(user));
            delete u._id;
            delete u.__v;
            objArr.push(u);
        });
        return objArr;
    }

    createCurrentDateFileName() {
        const date = new Date();
        var name = '';
        name += date.getMonth() + "-";
        name += date.getDate() + "-";
        name += date.getFullYear() + "-";
        name += date.getHours() + "_";
        name += date.getMinutes() + "_";
        name += date.getSeconds();
        return name;
    }
}

module.exports = new Common();