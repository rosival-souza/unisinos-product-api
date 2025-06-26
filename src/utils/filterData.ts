
export function filterDataObject<T>(data: T[], numberRegisters: number, filterFn?: (item: T) => boolean): T[] {
    
    return (filterFn ? data.filter(filterFn) : data).slice(0, numberRegisters);

}
