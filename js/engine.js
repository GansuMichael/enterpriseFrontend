// =====================================
// MODULE NAVIGATION
// =====================================

function showModule(moduleId){

    document
    .querySelectorAll(".module")
    .forEach(module => {

        module.classList.add("hidden");

    });

    const selected =
    document.getElementById(moduleId);

    if(selected){

        selected.classList.remove("hidden");

    }

}

// =====================================
// SUB PAGE NAVIGATION
// =====================================

function showSub(module, sub){

    document
    .querySelectorAll(
        `#${module} .subpage`
    )
    .forEach(page => {

        page.classList.add("hidden");

    });

    const selected =
    document.getElementById(
        `${module}-${sub}`
    );

    if(selected){

        selected.classList.remove(
            "hidden"
        );

    }

}