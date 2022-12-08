type Item = {
    name: string;
    id: string;
};

class Sources {
    draw(data: []) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: Item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const srcName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            const srcItem = sourceClone.querySelector('.source__item') as HTMLElement;

            srcName.textContent = item.name;
            srcItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesElement = document.querySelector('.sources') as HTMLElement;

        sourcesElement.append(fragment);
    }
}

export default Sources;
