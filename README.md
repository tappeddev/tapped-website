## How to preview the website?

Previously you need to remove the following line since images will not be displayed when the script is added:

`<script src="https://cmp.osano.com/AzZcqSSE5Emm31K4m/b5cedee9-b960-400f-b786-7ac47fb8f057/osano.js"></script>`

You could simply remove it or comment it out with: `<!-- script -->`

The path to the file is:

`themes/raditian-free-hugo-theme-adjusted/layouts/partials/head.html`

After the setup you could simply call:

`hugo -D serve`

The page should be available at: [localhost:1313/](http://localhost:1313/)

Hot Reload will also work. If you save something with `cmd + s` the page should be reloaded.

## Deployment 

Works automatically when any branches will be merged into the `main`. 
