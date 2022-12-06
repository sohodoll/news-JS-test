import './sources.css'

interface SourcesInterface {
  draw: (a: any) => void
}

class Sources {
  draw (data: any) {
    const fragment = document.createDocumentFragment()
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement

    data.forEach((item: any) => {
      const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true)
      const sourceName = sourceClone.querySelector('.source__item-name') as HTMLDivElement
      const sourceItem = sourceClone.querySelector('.source__item') as HTMLDivElement

      sourceName.textContent = item.name
      sourceItem.setAttribute('data-source-id', item.id)

      fragment.append(sourceClone)
    })
    const sources = document.querySelector('.sources') as HTMLDivElement
    sources.append(fragment)
  }
}

export default Sources
