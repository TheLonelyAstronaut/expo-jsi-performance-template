import { interfaces } from 'inversify';
import { useInjection } from 'inversify-react';

export const useContainerInstance = <T>(key: symbol | interfaces.Newable<T>): T => {
    return useInjection(key);
};