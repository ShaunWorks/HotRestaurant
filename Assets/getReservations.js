$.get("/api/tables", function (data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
        let id = data[i].id;
        let name = data[i].name;
        let email = data[i].email;
        let phone = data[i].phone;
        console.log(id, name, email, phone);

        let table = (i < 5) ? $("#current-reservations") : $("#waiting-list");
        let card = $("<div>").addClass("card mb-3");

        let header = $("<div>").addClass("card-header");
        header.append(`<h4>Table #${i+1}</h4>`);

        let body = $("<div>").addClass("card-body");
        body.append(`<h4>ID: ${id}</h4>`);
        body.append(`<h4>Name: ${name}</h4>`);
        body.append(`<h4>Email: ${email}</h4>`);
        body.append(`<h4>Phone: ${phone}</h4>`);

        card.append(header, body);
        table.append(card);
    }
})