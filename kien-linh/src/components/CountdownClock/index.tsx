import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import {
  SECOND_PER_MIN,
  SECOND_PER_HOUR,
  SECOND_PER_DAY
} from "@/config/constants";
import classNames from "classnames";

const ACTIVE = "active";

type TimeBlockProps = {
  type?: string;

  number: number;
  label?: string;
  enable?: boolean;
};

type CountdownProps = {
  className?: string;
  endTime: number;
};

const TimeBlock = (props: TimeBlockProps) => {
  const { type, number, label, enable = true } = props;
  return (
    <div className="block-container">
      <div className={`block b-time b-${type} b-${enable}`}>
        <span>{Math.floor(number / 10)}</span>
        <span>{number % 10}</span>
      </div>
      <div className={`time-label b-${enable} fz-10`}>{label}</div>
    </div>
  );
};

const getTotalSecond = (endTime: number) => {
  const timestamp = new Date().getTime();

  return Math.ceil((endTime - timestamp) / 1000);
};

const CountdownClock = (props: CountdownProps) => {
  const { className, endTime } = props;
  const intervalNo = useRef<number>(0);
  const [totalSecond, setTotalSecond] = useState<number>(
    getTotalSecond(endTime)
  );

  const clearInterval = useCallback(() => {
    setTotalSecond(0);
    window.clearInterval(intervalNo.current);
  }, []);

  const createInterval = useCallback(() => {
    const _interval = window.setInterval(() => {
      const _totalSecond = getTotalSecond(endTime);
      if (_totalSecond < 0) {
        clearInterval();
        return;
      }
      setTotalSecond(getTotalSecond(endTime));
    }, 1000);
    intervalNo.current = _interval;
  }, [endTime, clearInterval]);

  useEffect(() => {
    createInterval();
    return () => {
      clearInterval();
    };
  }, [clearInterval, createInterval]);

  // don't use memo
  const days = Math.floor(totalSecond / SECOND_PER_DAY);
  const hours = Math.floor(
    (totalSecond - days * SECOND_PER_DAY) / SECOND_PER_HOUR
  );
  const mins = Math.floor(totalSecond / SECOND_PER_MIN) % 60;
  const seconds = Math.floor(totalSecond) % 60;
  const disableDays = days === 0;
  const disableHours = disableDays && hours === 0;
  const disableMins = disableDays && disableHours && mins === 0;
  const disableSeconds =
    disableDays && disableHours && disableMins && seconds === 0;

  return (
    <div className={className || "countdown-clock"}>
      <TimeBlock
        type={days > 0 ? ACTIVE : ""}
        number={days}
        label="Ngày"
        enable={!disableDays}
      />
      <div className={classNames(`twodot b-${!disableDays} `)}>:</div>
      <TimeBlock
        type={disableDays && hours > 0 ? ACTIVE : ""}
        number={hours}
        label="Giờ"
        enable={!disableHours}
      />
      <div className={classNames(`twodot b-${!disableHours} `)}>:</div>
      <TimeBlock
        type={disableHours && mins > 0 ? ACTIVE : ""}
        number={mins}
        label="Phút"
        enable={!disableMins}
      />
      <div className={classNames(`twodot b-${!disableHours} `)}>:</div>
      <TimeBlock
        type={disableHours && mins > 0 ? ACTIVE : ""}
        number={seconds}
        label="Giây"
        enable={!disableSeconds}
      />
    </div>
  );
};

export default memo(CountdownClock);
