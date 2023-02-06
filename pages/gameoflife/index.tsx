import React, { useEffect, useState } from 'react';

const buildCivilization = (rows: number, cols: number) => {
  // const arr = new Array(rows);
  let arr: number[][] = [[]];
  // arr.forEach((v, i) =>  arr[v] = new Array(cols));
  for (let i = 0; i < cols; i++) {
    arr.push([]);
    for (let j = 0; j < rows; j++) {
      arr[i].push(Math.floor(Math.random() * 2));
    }
  }
  return arr;
};
function make2DArray(cols: number, rows: number) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function countNeighbors(grid: number[][], x: number, y: number) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

let rows = 40;
const cols = 40;


function GameOfLife() {
  const [civ, setCiv] = useState<number[][] | null>(null);
  const [size, setSize] = useState<number | undefined>();

  useEffect(() => {
    if (typeof document !== undefined) {
      const cellSize = (window.innerWidth * 0.5) / cols;
      setSize(cellSize);
    }

  }, []);

  useEffect(() => {
    const grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = Math.floor(Math.random() * 2);
      }
    }
    setCiv([...grid]);

    const gameStartInterval = setInterval(() => {
      setCiv((c) => {
        let next = make2DArray(cols, rows);
        if (!c) return buildCivilization(rows, cols);
        // Compute next based on grid
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let state = c[i][j];
            let neighbors = countNeighbors(c, i, j);
            if (state == 0 && neighbors == 3) {
              next[i][j] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
              next[i][j] = 0;
            } else {
              next[i][j] = state;
            }
          }
        }
        return next;
      });
    }, 100);
    return () => {
      clearInterval(gameStartInterval);
    };
  }, []);

  return (
    <div className='w-full min-h-screen items-center justify-center p-4 bg-bg flex'>
      <div >
        {civ?.map((rows, i) => (
          <div key={'row' + i} style={{ display: 'flex', flexDirection: 'row', width: 'full' }} >
            {civ[i].map((items, j) => (
              <div key={'col' + j}
                style={{
                  width: size,
                  height: size,
                  backgroundColor: civ[i][j] === 1 ? '#A8D200' : 'transparent'
                }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameOfLife; 