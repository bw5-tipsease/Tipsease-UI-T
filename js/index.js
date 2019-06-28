const siteContent = {
    "nav": {
        "nav-item-1": "About",
        "nav-item-2": "Tipsease",
        "nav-item-3": "Sign in",
        "nav-item-4": "Contact",
        "nav-item-5": "Terms of Service",
        "nav-item-6": "Legal"
    }
}

let navA = document.querySelectorAll('nav a');
    navA.forEach((element, index) => {
        element.textContent = siteContent["nav"][`nav-item-${index + 1}`];
    })
