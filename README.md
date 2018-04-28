Mars Rover
==========

This is just a small assignment. A simple terminal program to move a virtual
rover on a flat surface and get its resulting position.

How to start app?
-----------------

To run this small demo, you need *yarn* or *npm*.

```bash
yarn # or `npm i` to install dependencies
yarn start # or `node .`
```

How to use it?
--------------

```
Plateau 5 5 (set dimensions of plateau, 'Number Number')
Rover1 Landing 1 2 S (set landing point, 'Number Number Orientation')
Rover1 Instructions MLMM (set instructions)
```

- Possible orientations: **N**, **E**, **S**, **W** (cardinal directions)
- Possible instructions:
  - **M**: move
  - **L**: turn left
  - **R**: turn right

You can set the `ROVER_COUNT` environment variable to change the count of
rovers.

**Tested with Node.js v8.7.0**
