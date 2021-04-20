require("babel-register")({
    presets: ["es2015"]
});

exports.config = {
    directConnect: true,
    specs: ["ui/tests/**/*Test.js"],
    framework: "mocha",
    allScriptsTimeout: 120000,

    onPrepare: () => {
        //browser.manage().window().setSize(1024, 800);
    },

    capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        //shardTestFiles: false,

        chromeOptions: {
            args: [
                // disable chrome's wakiness
                "--disable-infobars",
                "--window-size=1800,900",
                "--disable-extensions",
                "verbose",
                "log-path=/tmp/chromedriver.log",
                "--disable-web-security",
                "--allow-running-insecure-content",
                //"--headless",
                "--allow-cross-origin-auth-prompt"
            ],
            prefs: {
                // disable chrome's annoying password manager
                "profile.password_manager_enabled": false,
                "credentials_enable_service": false,
                "password_manager_enabled": false
            }
        }
    },
    mochaOpts: {
        slow: 30000,
        reporter: "mochawesome",
        reporterOptions: {
            reportFilename: `reportui${process.env.NODE_ENV}.html`,
            reportDir: "reporter"
        },
        timeout: 30000000,
        verbose: true,
        exit: true
    }
};