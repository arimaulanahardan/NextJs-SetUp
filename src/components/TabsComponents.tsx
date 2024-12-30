// Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue     text color) for the active tab to differentiate it from the non-active tabs.
// At all times, only one panel's contents should be displayed — the one
 
    // corresponding to the active tab's.
//     Notes:
//     1. The focus of this question is on functionality, not the styling. There's no need to
//     write any custom CSS except for highlighting the active tab.
//     2. You may modify the markup (e.g. adding ids, data attributes, replacing some
//     tags, etc) and use client-side rendering instead.
//     3. You may want to think about ways to improve the user experience of the
//     application and implement them (you get bonus credit for doing that during
//     interviews)

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import {Button} from './ui/button'

const TabsComponents = () => {
    const [activeTab, setActiveTab] = React.useState('Tab 1')
  return (
    <Card>
      <CardHeader>
        <CardTitle>No. 3 Tabs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => setActiveTab('Tab 1')} className={activeTab === 'Tab 1' ? 'text-blue-500' : ''}>Tab 1</Button>
          <Button onClick={() => setActiveTab('Tab 2')} className={activeTab === 'Tab 2' ? 'text-blue-500' : ''}>Tab 2</Button>
          <Button onClick={() => setActiveTab('Tab 3')} className={activeTab === 'Tab 3' ? 'text-blue-500' : ''}>Tab 3</Button>
        </div>
        <div className="mt-4">
          {activeTab === 'Tab 1' && <div>Tab 1 content Active</div>}
          {activeTab === 'Tab 2' && <div>Tab 2 content Active</div>}
          {activeTab === 'Tab 3' && <div>Tab 3 content Active</div>}
        </div>
      </CardContent>
    </Card>
  )
}

export default TabsComponents
