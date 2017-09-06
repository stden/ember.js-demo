/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,

  launch_in_ci: [
    'Chrome'
  ],

  launch_in_dev: [
    'Chrome'
  ],

  browser_args: {
    Chrome: [
      '--disable-gpu',
      '--headless',
      '--remote-debugging-port=9222',
      '--window-size=1440,900'
    ]
  },

  launchers: {
    SL_firefox_public: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-b",
        "firefox",
        "--visibility",
        "public",
        "--attach",
        "--no-connect",
        "--url"
      ],
      "protocol": "browser"
    }
  }
};
