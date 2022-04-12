import {motion} from 'framer-motion';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
        <motion.div className='expand'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum obcaecati sunt nulla molestiae rem ratione veniam odit dignissimos? Quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tempora?</p>
          <button>Hello</button>
        </motion.div>

        )}
      </motion.div>
    </div>
  );
}

export default App;
