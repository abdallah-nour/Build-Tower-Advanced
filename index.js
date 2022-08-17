// we have tower consist of floors
// each floor is a block
// block have width and height
// block width represent the number of stars (for 1st floor)
// block hegiht represetn the number of rows in the block
// console.log('floor', floor, 'stars', stars, 'spaces', spaces);

function towerBuilder(nBlocks, [width, height]) {
  const resultFloors = [];
  const totalRowWidth = width * (nBlocks - 1) * 2 + width;
  for (let floor = 0; floor < nBlocks; floor++) {
    const block = [];
    const stars = width * floor * 2 + width;
    const spaces = (totalRowWidth - stars) / 2;
    const row = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
    Array.from({ length: height }).map((v, i) => block.push(row));
    resultFloors.push(...block);
  }
  return resultFloors;
}

// append to document
const pre = document.createElement('pre');
pre.textContent = towerBuilder(3, [2, 4]).join('\n');
document.getElementById('root').appendChild(pre);
