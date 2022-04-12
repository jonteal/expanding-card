import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">

      <motion.div 
        transition={{layout: {duration: 1, type: "spring"}}} 
        layout 
        onClick={() => setIsOpen(!isOpen)} 
        className="card"
        style={{borderRadius: "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5'}}
        >

        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          transition={{duration: 1}}
          className='expand'>
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
