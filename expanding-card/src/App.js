import {motion} from 'framer-motion';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
        <motion.div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum obcaecati sunt nulla molestiae rem ratione veniam odit dignissimos? Quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tempora?</p>
        </motion.div>

        )}
      </motion.div>
    </div>
  );
}

export default App;
