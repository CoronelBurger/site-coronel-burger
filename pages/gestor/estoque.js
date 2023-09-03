import { useState } from 'react'

import Header from '../../components/layout/Header'
import Dev from '../../components/layout/Dev'

const Estoque = () => {
  const links = [
    { name: 'Visão geral', view: (<Dev title='Visão geral' />) },
    { name: 'Itens', view: (<Dev title='Itens' />) },
    { name: 'Categorias', view: (<Dev title='Categoria' />) }
  ]

  const [view, setView] = useState(links[0].view)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
    }}>
      <Header setView={setView} links={links} />
      {view}
    </div>
  )
}

export default Estoque