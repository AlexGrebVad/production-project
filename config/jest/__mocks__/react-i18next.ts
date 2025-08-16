import * as React from 'react'

export const useTranslation = () => {
  return {
    t: (str: string) => str,
    i18n: { changeLanguage: () => new Promise(() => {}) },
  }
}

export const Trans = ({ children }: { children: React.ReactNode }) => children

export const withTranslation = () => (Component: React.ComponentType<any>) => {
  const Wrapped: React.FC<any> = (props: Record<string, any>) =>
    React.createElement(Component, { t: (str: string) => str, ...props })

  return Wrapped
}
