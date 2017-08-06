# Website organisation

This is what I'm planning to do.

## Tab 1 (main tab)

Show lastest consumables and required materials to craft them. Users can select the number of consumables they want in order to have the requirements.

### Display

1. Newest consumables of the expansion/patch for HL content
Format : Tiles with name, icon and input number (vertical order)

2. List of all required materials (name and number).
Format : Grid (2 cols : icon/name + number)

3. List of tradable materials to get the required materials (name and number).
Format : Tiles with name, icon and number (vertical order)

### Actions

- User : Insert numbers in consumable tiles
- Server : Watch and refresh on typing (300 ms between requests)

## Tab 2 (Materials)

### Display

All materials sorted by expansion (Content.expansionName)
Format : multiple arrays (one by expansion) sorted by type/patch, with these columns :
- Material icon
- Material name
- Type (class name : obj.constructor.name)
- Traded Material + ratio (if exists)
- Patch number
- Expansion name

### Actions

No actions (read-content only)