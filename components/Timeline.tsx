import hexToRgba from 'hex-rgba';
import React from 'react';
//@ts-ignore
import HorizontalTimeline from 'react-horizontal-timeline';
import { convertYearString, timelineBCFormat } from '../util/constants';

interface TimelineProps {
  index: number;
  onChange: (value: number) => void;
  years: number[];
  globe: boolean;
}

const Timeline = ({ index, onChange, years, globe }: TimelineProps) => (
  <div className="timeline">
    <div
      style={{
        width: '100%',
        fontSize: '14px',
        color: `${!globe ? '#6930c3' : '#64dfdf'}`,
        textShadow: `0px 0px 4px ${!globe ? '#64dfdf' : '#6930c3'}`,
      }}
      className="timeline"
    >
      <HorizontalTimeline
        styles={{
          background: `${!globe ? '#6930c3' : '#64dfdf'}`,
          foreground: `${!globe ? '#6930c3' : '#64dfdf'}`,
          outline: hexToRgba('#000', 1),
        }}
        index={index}
        indexClick={(newIndex: number) => {
          onChange(newIndex);
        }}
        getLabel={(date: any) =>
          convertYearString(
            timelineBCFormat,
            date < 100 ? date : new Date(date, 0).getFullYear(),
          )
        }
        values={years}
        linePadding={50}
        isOpenEnding={false}
        isOpenBeginning={false}
        minEventPadding={-20}
        maxEventPadding={3}
      />
    </div>
  </div>
);

export default Timeline;
