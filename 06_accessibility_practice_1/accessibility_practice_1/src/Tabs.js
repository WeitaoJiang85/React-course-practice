import { useState, useEffect, useRef } from 'react'
import './Tabs.css'

const headings = ['First tab', 'Second tab', 'Third tab']
const contents = [
  'This is the first tab content',
  'The second tab is much the same as the first tab',
  'But the third tabe does its own thing',
]

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)
  const tabsRef = useRef([])

  useEffect(() => {
    tabsRef.current[selectedTab].focus()
  }, [tabsRef, selectedTab])

  const handleKeyDown = (event) => {
    let flag = false

    switch (event.key) {
      case 'ArrowLeft':
        selectedTab === 0
          ? setSelectedTab(headings.length - 1)
          : setSelectedTab((prevSelected) => prevSelected - 1)
        flag = true
        break

      case 'ArrowRight':
        selectedTab === headings.length - 1
          ? setSelectedTab(0)
          : setSelectedTab((prevSelected) => prevSelected + 1)
        flag = true
        break

      case 'Home':
        setSelectedTab(0)
        flag = true
        break

      case 'End':
        setSelectedTab(headings.length - 1)
        flag = true
        break

      default:
        break
    }

    if (flag) {
      event.stopPropagation()
      event.preventDefault()
    }
  }

  return (
    <div className="Tabs">
      <div role="tablist" aria-labelledby="tablist-1" className="manual">
        {headings.map((text, idx) => {
          return (
            <TabHeading
              key={idx}
              idx={idx}
              onClick={() => {
                setSelectedTab(idx)
              }}
              handleKeyDown={handleKeyDown}
              selected={selectedTab === idx}
              title={text}
              tabsRef={tabsRef}
            />
          )
        })}
      </div>

      {contents.map((text, idx) => {
        return (
          <Tabcontent
            key={idx}
            idx={idx}
            selected={selectedTab === idx}
            content={text}
          />
        )
      })}
    </div>
  )
}

function TabHeading(props) {
  return (
    <button
      id={`tab-${props.idx}`}
      type="button"
      role="tab"
      aria-selected={props.selected}
      aria-controls={`tabpanel-${props.idx}`}
      onClick={props.onClick}
      onKeyDown={props.handleKeyDown}
      tabinder={props.selected ? null : '-1'}
      className={props.selected ? 'tab-selected' : 'tab'}
      ref={(refs) => {
        props.tabsRef.current[props.idx] = refs
      }}
    >
      <span>{props.title}</span>
    </button>
  )
}

function Tabcontent(props) {
  return (
    <div
      id={`tab-${props.idx}`}
      role="tabpanel"
      aria-labelledby={`tabpanel-${props.idx}`}
      className="tabcontent"
      hidden={!props.selected}
    >
      {props.content}
    </div>
  )
}

export default Tabs
