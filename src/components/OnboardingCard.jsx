const OnboardingCard = ({
  title,
  desc,
  image,
  keywords,
  salePrice,
  originalPrice,
}) => {
  return (
    <div className="w-[397px] h-[316px] mb-6">
      <div className="block space-y-4">
        <img
          src={`./images/${image}.png`}
          className="w-full rounded-lg md:rounded-none lg:rounded-xl"
        />
        <div className="space-y-2">
          <div class="flex items-center gap-[8px]">
            {keywords.map((v, i) => (
              <div class="rounded bg-neutral-100 px-1 py-[2px] text-xs text-trueGray-500 lg:px-2 lg:py-1 lg:text-sm">
                {v}
              </div>
            ))}
          </div>
          <h4 class="text-sm font-semibold text-gray-800 lg:text-lg">
            {title}
          </h4>
          <p class="text-xs text-neutral-500 lg:text-base">{desc}</p>
          <div class="space-x-1">
            <span class="text-sm font-medium text-gray-800 lg:text-base">
              {salePrice}
            </span>
            <span class="text-xs text-gray-400 line-through lg:text-sm">
              {originalPrice}
            </span>
            <div class="inline-block rounded px-1.5 py-0.5 text-xs font-semibold text-techit-main bg-orange-100 lg:text-xs">
              수료 시 전액환급
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;
