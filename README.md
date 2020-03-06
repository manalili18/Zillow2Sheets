# Zillow2Sheets
This project should help with comparing houses when you're in the market.
Using a python backend to organize data, this application will utilize the Zillow API to pull info
about a house. Once the data is organized, this app will push relevant info to an organized 
Google Sheets file. 

## Bare minimum goals:
- CLI controls
- URL input 
- Accurately reads Zillow
- Accurately writes Sheets
- MacOS portability via Python2 compatibility (This is installed by default.)

## Stretch goals:
- Graphical GUI Interface (This is a joke, I know what GUI stands for)
    - This is for ease of use
    - CLI might not be the best implementation
- update command that will update outdated information on sheets
    - read in sheet
    - read in zillow
    - compare
    - write out updates to sheet
- SUPER STRETCH GOAL ALERT: apply ML to pick out key words for benefits and drawbacks of houses
    - ML might be a little overkill, but useful for pictures and text descriptions
    - non-ML implementations for the same goal:
        - read lot size / living space and compare against set threshold
        - search only for keywords (eg good light, good layout, updated appliances, ...)
    - but ML is cool and fun to learn so it might be worth pursuing, if we don't implement it for
      our current 2020 house hunting season, it might be useful for house hunting when it's time for
      me to go through the same process.
- query other housing databases

cool
thxbai
