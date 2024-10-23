# Pin Drop Map with Remarks

A React-based interactive map tool that allows users to drop pins, add remarks, and automatically fetch addresses using OpenStreetMap's Nominatim API. Saved pins are displayed in a sidebar and persisted using localStorage.

## Deployed Link-
https://celadon-otter-4c9242.netlify.app

## Features

- **Interactive Map Interface:** Drop pins anywhere on the map.
- **Popup Form:** Add optional remarks for each pin.
- **Address Fetching:** Automatically fetch address for dropped pins.
- **Pin List:** View all saved pins with remarks and addresses in a sidebar.
- **Pin Navigation:** Clicking on a saved pin centers the map to that location.
- **Persistent Storage:** Pins are saved using localStorage and persist across sessions.

## Demo
<img width="953" alt="Screenshot 2024-10-23 151850" src="https://github.com/user-attachments/assets/0b3f9d13-58f4-4a6f-abe3-11ae14827a0a">



## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** installed on your system. [Download Node.js](https://nodejs.org/)
- **Git** installed (optional if you're cloning the repository via Git).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pin-drop-map.git
   cd pin-drop-map

2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm start


### Technologies Used
  React.js: Frontend library for building the user interface.
  Leaflet: Interactive maps.
  OpenStreetMap API: Address fetching from coordinates.
  localStorage: Data persistence across browser sessions.
  CSS: Styling and layout.
