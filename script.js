const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

</script>

<script>

    const staticUrl = 'https://covid2019-api.herokuapp.com/v2/total'

    $.getJSON(staticUrl, function (data) {
        $("#Confirmed").text(new Intl.NumberFormat().format(data.data.confirmed));
        $("#Deaths").text(new Intl.NumberFormat().format(data.data.deaths))
        $("#Recovered").text(new Intl.NumberFormat().format(data.data.recovered))
        $("#Active").text(new Intl.NumberFormat().format(data.data.active))
        $("#date").text(data.dt)
    });

    $.getJSON("https://covid2019-api.herokuapp.com/v2/current", function (data2) {
        var i;
        for (i = 0; i <= data2.data.length; i++) {
        $("#grid-container").append(`<div class="grid-item" style ="font-family: Circular; background-color: var(--gridLeftColumn)">${(data2.data[i].location)}</div>`);
        $("#grid-container").append(`<div class="grid-item">${new Intl.NumberFormat().format(data2.data[i].confirmed)}</div>`);
        $("#grid-container").append(`<div class="grid-item">${new Intl.NumberFormat().format(data2.data[i].active)}</div>`);
        $("#grid-container").append(`<div class="grid-item">${new Intl.NumberFormat().format(data2.data[i].recovered)}</div>`);
        $("#grid-container").append(`<div class="grid-item">${new Intl.NumberFormat().format(data2.data[i].deaths)}</div>`);
        }
    });
