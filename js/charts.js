// =====================================
// EGG CHART
// =====================================

function renderEggChart(labels,data){

    const ctx =
    document.getElementById(
        "eggChart"
    );

    if(window.eggChartInstance){

        window
        .eggChartInstance
        .destroy();

    }

    window.eggChartInstance =
    new Chart(ctx,{

        type:"line",

        data:{

            labels,

            datasets:[{

                label:"Egg Production",

                data,

                borderWidth:2

            }]

        }

    });

}