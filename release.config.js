module.exports = {
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/npm", {
            "tarballDir": "release"
        }],
        ["@semantic-release/github", {
            "assets": "release/*.tgz"
        }],
        "@semantic-release/git"
    ],
    "release": {
        "branches": [
          "+([0-9])?(.{+([0-9]),x}).x",
          "main",
          "next",
          "next-major",
          {
            "name": "beta",
            "prerelease": true
          },
          {
            "name": "alpha",
            "prerelease": true
          }
        ]
    },
    "files": [
        "index.js",
        "package.json"
    ],
}